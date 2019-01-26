
interface Function{
    (): void
}

export interface MainProps {
    inn: Function,
    out: Function,
    start:  string,
    end: string,
    clock: string,
    started: boolean,
    stopped: boolean,
}