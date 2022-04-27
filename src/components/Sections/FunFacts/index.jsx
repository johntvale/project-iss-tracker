import React, { useState } from 'react';
import { postList } from '../../../helpers/postList';
import SectionTitle from '../SectionTitle';
import { mapPostList, mapPostListInputs } from '../../../helpers/mapFunFacts';
import './style.css';

export default function FunFacts() {
  const [selectedPost, setSelectedPost] = useState(0);

  const inputSelectionControl = (inputToCheck) => {
    return selectedPost === inputToCheck;
  };

  return (
    <section id="fun-facts">
      <SectionTitle title="fun facts" />
      {mapPostList(postList, selectedPost)}
      <nav>{mapPostListInputs(postList, setSelectedPost, inputSelectionControl)}</nav>
    </section>
  );
}
