
interface Function{
    (): void
}

export interface MainProps {
    inn: Function,
    out: Function,
    start:  string,
    end: string,
    clock: string,
}

export interface MainState{
    running: boolean
}