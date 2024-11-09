export const ClassName = (...classes: string[]) => {
    return classes.filter(Boolean).join(' ')
}