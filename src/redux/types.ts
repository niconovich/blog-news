export interface  ILaunches{
    id:string,
    provider?:string,
}
export interface  IEvents{
    id:string,
    provider?:string,
}
export interface IArticle {
    id: number,
    title?: string,
    url?:string,
    imageUrl?: string,
    newsSite?:string,
    summary?: string,
    publishedAt?: string,
    updatedAt?: string,
    featured?:boolean,
    launches?:ILaunches[],
    events?:IEvents[],
}

export interface IArticleStore {
    articles: IArticle[],
    favorites: number[],
    countTotal: number,
    countTotalPages: number,
    searchValue: string,
}

export interface ISettingsStore {
    activeTab: string,
    currentPage: number,
    rowsPerPage: number,
    sortSpis:string,
    sortType:string,
    sortTitle:string,
}

export interface IUserStore {
    user: IUser
}

export interface IStore {
    articles: IArticleStore,
    settings: ISettingsStore,
    users: IUserStore,
}

export interface IUser {
    id?: number,
    email: string,
    username?: string,
    password: string
  }

 export interface JwtResponse {
    access: string,
    refresh: string
  }

