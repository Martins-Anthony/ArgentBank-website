export const selectUser = (state) => state.authentication.user
export const selectProfile = (state) => state.authentication.profile
export const selectLoading = (state) => state.authentication.selectLoading
export const selectError = (state) => state.authentication.error
export const selectErrorModal = (state) => state.errorModal
export const selectRememberMeChecked = (state) => state.rememberMe
export const selectEditMode = (state) => state.editUserName.editMode
