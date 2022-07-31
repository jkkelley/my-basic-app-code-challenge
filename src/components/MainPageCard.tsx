import { Card, CardContent, CardHeader, CardMedia } from '@mui/material';
import { Post } from '../interfaces/post';

type Props = {
  currentPost: Post | undefined;
};

export default function MainPageCard({ currentPost }: Props) {
  return (
    <>
      <Card
        sx={{
          textAlign: 'left'
        }}>
        <CardMedia
          alt="Paella dish"
          component="img"
          height="200"
          image="https://picsum.photos/200/300"
        />
        <CardHeader title={currentPost?.title} />
        <CardContent>{currentPost?.body}</CardContent>
      </Card>
    </>
  );
}
