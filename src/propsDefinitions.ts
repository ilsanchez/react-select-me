import T from 'prop-types';

export module IReactSelectMe {
  export type ListPosition = 'top' | 'bottom' | 'auto';

  export type Primitive = string | number;

  export type Option = {[K: string]: string | Primitive} | Primitive;

  export type ClassType = string;

  export interface ClassNames {
    // wrapper
    dd__wrapper?: ClassType;
    // applied to multi select
    dd__multi?: ClassType;
    // applied to single select
    dd__single?: ClassType;
    // applied when dropdown opened
    dd__opened?: ClassType;
    // applied when dropdown has error property
    dd__error?: ClassType;
    // disabled
    dd__disabled?: ClassType;
    // selected block class
    dd__selectControl?: ClassType;
    // selected values wrapper class
    dd__selected?: ClassType;
    // placeholder class
    dd__placeholder?: ClassType;
    // selected option class
    dd__selectedItem?: ClassType;
    // icon to remove selected value class
    dd__crossIcon?: ClassType;
    // list class
    dd__list?: ClassType;
    // virtualized list class
    dd__listVirtualized?: ClassType;
    // applied when select opens to bottom
    dd__openTobottom?: ClassType;
    // applied when select opens to top
    dd__openTotop?: ClassType;
    // dropdown option
    dd__option?: ClassType;
    // dropdown option
    dd__optionDisabled?: ClassType;
    // virtualized option class
    dd__optionVirtualized?: ClassType;
    // selected dropdown option
    dd__selectedOption?: ClassType;
    // search input
    dd__search?: ClassType;
    // expanded icon
    dd__expandIcon?: ClassType;
  }

  export interface Props {
    addNewItem: boolean | string | Function | T.ReactElementLike;
    beforeClose: Function;
    beforeOpen: Function;
    boundaryMargin: number;
    disabled: boolean;
    error: boolean;
    forbidPhantomSelection?: boolean;
    getWrapper: Function;
    iconRenderer?: Function;
    immutable: boolean;
    isOpened?: boolean;
    labelKey: string;
    listHeight?: number;
    listMaxHeight: number;
    listPosition: ListPosition;
    listRenderer?: Function;
    multiple: boolean;
    noItemsFound: boolean | string | Function | T.ReactElementLike;
    onAddNewItem?: Function;
    onChange: Function;
    onClose: Function;
    onOpen: Function;
    onSearch?: Function;
    optionRenderer?: Function;
    options: Option[];
    placeholder: string | T.ReactComponentLike;
    optionHeight: number | Function;
    s: ClassNames;
    searchable: boolean;
    searchClearOnClose: boolean;
    searchDefaultsToSelectedValue: boolean;
    searchInputRenderer?: Function;
    selectedBlockRenderer?: Function;
    selectedValueRenderer?: Function;
    value?: Option | Option[];
    valueKey: string;
    virtualized: boolean;
    // from HOC
    toImmutable?: Function;
    renderVirtualizedList: Function;
  }

  export interface State {
    opened: boolean;
    search: string;
  }
}

export const defaultProps: IReactSelectMe.Props = {
  addNewItem: false,
  beforeClose: () => true,
  beforeOpen: () => true,
  boundaryMargin: 8,
  disabled: false,
  error: false,
  getWrapper: () => null,
  iconRenderer: undefined,
  immutable: false,
  isOpened: undefined,
  labelKey: 'label',
  listHeight: undefined,
  listRenderer: undefined,
  multiple: false,
  listMaxHeight: 400,
  listPosition: 'auto',
  noItemsFound: true,
  onAddNewItem: () => null,
  onChange: () => null,
  onClose: () => null,
  onOpen: () => null,
  optionHeight: 40,
  options: [],
  optionRenderer: undefined,
  onSearch: undefined,
  placeholder: 'Select ...',
  valueKey: 'value',
  s: {},
  searchable: false,
  searchClearOnClose: true,
  searchDefaultsToSelectedValue: false,
  searchInputRenderer: undefined,
  selectedBlockRenderer: undefined,
  selectedValueRenderer: undefined,
  value: undefined,
  virtualized: false,
  renderVirtualizedList: () => false
};

const classType = T.oneOfType([T.string, T.array]);

export const propTypes = {
  addNewItem: T.oneOfType([T.bool, T.string, T.func, T.element]),
  beforeClose: T.func,
  beforeOpen: T.func,
  boundaryMargin: T.number,
  disabled: T.bool,
  error: T.bool,
  forbidPhantomSelection: T.bool,
  getWrapper: T.func,
  iconRenderer: T.func,
  immutable: T.bool,
  isOpened: T.bool,
  labelKey: T.string,
  listHeight: T.number,
  listMaxHeight: T.number,
  listPosition: T.oneOf(['top', 'bottom', 'auto']),
  listRenderer: T.func,
  multiple: T.bool,
  noItemsFound: T.oneOfType([T.bool, T.string, T.func, T.element]),
  onAddNewItem: T.func,
  onChange: T.func.isRequired,
  onClose: T.func,
  onOpen: T.func,
  onSearch: T.func,
  optionRenderer: T.func,
  options: T.oneOfType([T.array, T.object]),
  placeholder: T.oneOfType([T.string, T.element]),
  optionHeight: T.oneOfType([T.number, T.func]),
  /* eslint-disable react/no-unused-prop-types */
  s: T.shape({
    // wrapper
    dd__wrapper: classType,
    // applied to multi select
    dd__multi: classType,
    // applied to single select
    dd__single: classType,
    // applied when dropdown opened
    dd__opened: classType,
    // applied when dropdown has error property
    dd__error: classType,
    // disabled
    dd__disabled: classType,
    // selected block class
    dd__selectControl: classType,
    // selected values wrapper class
    dd__selected: classType,
    // placeholder class
    dd__placeholder: classType,
    // selected option class
    dd__selectedItem: classType,
    // icon to remove selected value class
    dd__crossIcon: classType,
    // list class
    dd__list: classType,
    // virtualized list class
    dd__listVirtualized: classType,
    // applied when select opens to bottom
    dd__openTobottom: classType,
    // applied when select opens to top
    dd__openTotop: classType,
    // dropdown option
    dd__option: classType,
    // dropdown option
    dd__optionDisabled: classType,
    // virtualized option class
    dd__optionVirtualized: classType,
    // selected dropdown option
    dd__selectedOption: classType
  }),
  /* eslint-enable react/no-unused-prop-types */
  searchable: T.bool,
  searchClearOnClose: T.bool,
  searchDefaultsToSelectedValue: T.bool,
  searchInputRenderer: T.func,
  selectedBlockRenderer: T.func,
  selectedValueRenderer: T.func,
  value: T.any,
  valueKey: T.string,
  virtualized: T.bool,
  // from HOC
  toImmutable: T.func
};
