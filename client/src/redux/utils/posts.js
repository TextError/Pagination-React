export const postsPerPageFunc = (currentPage, postsPerPage, data) => {
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  return currentPosts
}

export const pageNumberFunc = ( postsPerPage, totalPosts ) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  };
  return pageNumbers
}