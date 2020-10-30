import History from 'history'

interface HomePageProps {
  history: History // TODO import the correct one
}

export interface HomeDispatchPops {}

interface HomePageOwn {}

export type HomePageState = HomePageProps & HomeDispatchPops & HomePageOwn;
