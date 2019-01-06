
interface Function{
    (): void
}

export interface MainProps {
    in: Function,
    out: Function,
    start:  string,
    end: string,
    clock: number,
    started: boolean,
    stopped: boolean,
}