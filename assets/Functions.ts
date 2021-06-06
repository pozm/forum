export const PowerArray = ['user', 'friend', 'mod', 'x', 'x', 'ADMIN']
export function parsePowerId (uId : string | number) {
    const id = Number(uId)
    return PowerArray[id]
}
export function uuidv4 () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0; const v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    })
}
export const ThreadReplyOptionsctx = [
    {
        name: 'Edit',
        slug: 'edit',
        class: 'my-custom-class'
    }
]

export function Clamp (min:number, max:number, v:number) {
    return Math.min(Math.max(v, min), max)
};
