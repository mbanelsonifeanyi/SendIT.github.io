

const imageUploadFunction = (request, response) => {
  const productImage = request.file.productImage;
  console.log(productImage);
  return response.status(200).json('Wait a minute!');
};
export default imageUploadFunction;
