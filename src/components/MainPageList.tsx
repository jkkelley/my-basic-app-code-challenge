import { PropsWithChildren } from 'react';

// MUI
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Post } from '../interfaces/post';
import { useNavigate } from 'react-router-dom';

export default function MainPageList(
  props: PropsWithChildren<{
    posts: Post[];
  }>
) {
  const { posts } = props;

  const navigate = useNavigate();

  const handleClick = (post: Post) => () => {
    navigate(`/${post.id}`);
  };

  return (
    <>
      <List sx={{ maxWidth: 899 }}>
        {posts.map((post, i) => (
          <ListItem key={i} button divider onClick={handleClick(post)}>
            <ListItemIcon>{i + 1}</ListItemIcon>
            <ListItemText>{post.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
}
