import Post from '../components/Sections/FunFacts/Post';
import PostInput from '../components/Sections/FunFacts/PostInput';

export function mapPostList(postList, selectedPost) {
  const map = postList.map((postItem) => {
    const { id, image, title, text, credit, url } = postItem;
    if (id === selectedPost)
      return <Post key={id} title={title} image={image} text={text} credit={credit} url={url} />;
    return null;
  });
  return map;
}

export function mapPostListInputs(postList, setSelectedPost, inputSelectionControl) {
  const map = postList.map((postItem) => {
    const { id } = postItem;
    return (
      <PostInput
        key={id}
        id={id}
        setSelectedPost={setSelectedPost}
        inputSelectionControl={inputSelectionControl}
      />
    );
  });

  return map;
}
