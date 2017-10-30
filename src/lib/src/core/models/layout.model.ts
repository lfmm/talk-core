
export interface LayoutState {

  // right to left
  rtl: boolean;
  // visibility
  show: {
    header: boolean,
    nav: boolean,
    content: boolean,
    aside: boolean,
    footer: boolean
  };
  // sizes
  sizes: {
    header: number,
    nav: number,
    content: number,
    aside: number,
    footer: number
  };

}

export const initialLayoutState: LayoutState = {
  rtl: false,
  show: {
    aside: true,
    content: true,
    footer: true,
    header: true,
    nav: true
  },
  sizes: {
    aside: 20,
    content: 80,
    footer: 10,
    header: 20,
    nav: 20
  }
};
