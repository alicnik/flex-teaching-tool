export type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch';
export type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'stretch';
export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';

export interface FlexComponent {
  id: string;
  children: string[];
  parent?: string;
  justifyContent: JustifyContent;
  alignItems: AlignItems;
  flexGrow: number;
  flexShrink: number;
  order: number;
  flexBasis: string;
  flexDirection: FlexDirection;
  flexWrap: FlexWrap;
  width: string;
  gap: string;
  height?: string;
  minHeight?: string;
}
