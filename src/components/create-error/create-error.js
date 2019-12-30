const CreateError = ({ state }) => {
  if (state) {
    throw new Error(':))')
  }
  return '';
}
export default CreateError;