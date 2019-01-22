export const destroyNow = (count: number) => {
    return count == 3
}

export const onChange = (setShow: CallableFunction, label: string) => (prevCount: number, nextCount: number) => {
    console.info(`Changed ${label}`, {prev: prevCount, next: nextCount})
    if (destroyNow(nextCount)) {
        setShow(false);
        console.warn(`Destroyed  ${label}!`)
    }
}