import mitt from 'mitt'


type Events = {
  toggleNavigationVisibleEvent: void,
  closeNavigationChildrenEvent: { saveLevel: number, exceptParentId: string },
}

export type CloseNavigationChildrenPayload = Events['closeNavigationChildrenEvent']


export const emitter = mitt<Events>()
