import produce from 'immer';

// export function produceUserDetails(user, details){
//     return produce(user, draft => {
//         draft.details = details;
//     })
// }
export const produceUserDetails = produce((draftUser, details) => {
    draftUser.details = details;
})