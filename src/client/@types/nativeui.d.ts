/* eslint-disable no-dupe-class-members */
/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'plugins/nativeui' {
  export enum BadgeStyle {
    None,
    BronzeMedal,
    GoldMedal,
    SilverMedal,
    Alert,
    Crown,
    Ammo,
    Armour,
    Barber,
    Clothes,
    Franklin,
    Bike,
    Car,
    Gun,
    Heart,
    Makeup,
    Mask,
    Michael,
    Star,
    Tatoo,
    Trevor,
    Lock,
    Tick,
    Sale,
    ArrowLeft,
    ArrowRight,
    Audio1,
    Audio2,
    Audio3,
    AudioInactive,
    AudioMute
  }

  export enum Font {
    ChaletLondon = 0,
    HouseScript = 1,
    Monospace = 2,
    CharletComprimeColonge = 4,
    Pricedown = 7
  }

  export interface ILiteEvent {
    on(handler: { (...args: any[]): void }): void;
    off(handler: { (...args: any[]): void }): void;
  }

  export class LiteEvent implements ILiteEvent {
    public on(handler: { (...args: any[]): void }): void;
    public off(handler: { (...args: any[]): void }): void;
    public emit(...args: any[]): void;
    public expose(): ILiteEvent;
    public count(): number;
  }

  export class Color {
    public static Empty: Color;
    public static Transparent: Color;
    public static Black: Color;
    public static White: Color;
    public static WhiteSmoke: Color;

    public R: number;
    public G: number;
    public B: number;
    public A: number;

    constructor(r: number, g: number, b: number, a?: number);
  }

  export class Point {
    public X: number;
    public Y: number;

    constructor(x: number, y: number);

    static Parse(point: number[]): Point;
    static Parse(point: { X: number; Y: number }): Point;
    static Parse(arg: Record<string, unknown> | string): Point;
  }

  export class ListItem {
    public readonly Id: string;
    public DisplayText: string;

    constructor(text?: string);
  }

  export class ItemsCollection {
    constructor(items: ListItem[] | string[] | number[]);

    public length(): number;
    public getListItems(): ListItem[] | string[] | number[];
  }

  export class UIMenuItem {
    public readonly Id: string;

    public static readonly DefaultBackColor: Color;
    public static readonly DefaultHighlightedBackColor: Color;
    public static readonly DefaultForeColor: Color;
    public static readonly DefaultHighlightedForeColor: Color;

    public BackColor: Color;
    public HighlightedBackColor: Color;

    public ForeColor: Color;
    public HighlightedForeColor: Color;

    public Enabled: boolean;
    public Selected: boolean;
    public Hovered: boolean;
    public Data: any;

    public Offset: Point;
    public Parent: Menu;

    public get Text(): string;
    public set Text(text: string);

    public get Description(): string;
    public set Description(text: string);

    public RightLabel: string;
    public LeftBadge: BadgeStyle;
    public RightBadge: BadgeStyle;

    constructor(text: string, description?: string, data?: unknown);

    public SetVerticalPosition(y: number): void;
    public SetLeftBadge(badge: BadgeStyle): void;
    public SetRightBadge(badge: BadgeStyle): void;
    public SetRightLabel(text: string): void;
  }

  export class UIMenuCheckboxItem extends UIMenuItem {
    public Checked: boolean;

    constructor(text: string, check?: boolean, description?: string);
  }

  export class UIMenuDynamicListItem extends UIMenuItem {
    public get PreCaptionText(): string;
    public set PreCaptionText(text: string);

    public get LeftMoveThreshold(): number;
    public set LeftMoveThreshold(amt: number);

    public get RightMoveThreshold(): number;
    public set RightMoveThreshold(amt: number);

    public get LowerThreshold(): number;
    public set LowerThreshold(amt: number);

    public get UpperThreshold(): number;
    public set UpperThreshold(amt: number);

    public get SelectedValue(): number;
    public set SelectedValue(value: number);

    constructor(text: string, description?: string, lowerThreshold?: number, upperThreshold?: number, startValue?: number);
  }

  export class UIMenuListItem extends UIMenuItem {
    public ScrollingEnabled: boolean;
    public HoldTimeBeforeScroll: number;

    public get Collection(): ListItem[];
    public set Collection(collection: ListItem[]);

    public get SelectedItem(): ListItem;
    public set SelectedItem(item: ListItem);

    public get SelectedValue(): string;

    public get Index(): number;
    public set Index(value: number);

    constructor(text: string, description?: string, collection?: ItemsCollection, startIndex?: number);
  }

  export class UIMenuSliderItem extends UIMenuItem {
    constructor(text: string, items: any[], index: number, description?: string, divider?: boolean, data?: unknown);
  }

  export class Menu {
    public get Subtitle(): string;
    public set Subtitle(text: string);

    public get Visible(): boolean;
    public set Visible(toggle: boolean);

    public readonly IndexChange: LiteEvent;
    public readonly ListChange: LiteEvent;
    public readonly DynamicListChange: LiteEvent;
    public readonly SliderChange: LiteEvent;
    public readonly SliderSelect: LiteEvent;
    public readonly CheckboxChange: LiteEvent;
    public readonly ItemSelect: LiteEvent;
    public readonly MenuOpen: LiteEvent;
    public readonly MenuClose: LiteEvent;
    public readonly MenuChange: LiteEvent;

    public MenuItems: (
      | UIMenuItem
      | UIMenuListItem
      | UIMenuDynamicListItem
      | UIMenuSliderItem
      | UIMenuCheckboxItem)[];

    constructor(title: string, subtitle: string, offset: Point, spriteLibrary?: string, spriteName?: string);

    public SetMenuWidthOffset(item: UIMenuItem): void;
    public AddItem(item: UIMenuItem): void;
    public RemoveItem(item: UIMenuItem): void;
    public RefreshIndex(): void;
    public Clear(): void;
    public Open(): void;
    public Close(closeChildren?: boolean): void;
    public BindMenuToItem(menuToBind: Menu, itemToBindTo: UIMenuItem): void;
    public ReleaseMenuFromItem(releaseFrom: UIMenuItem): void;
  }
}
