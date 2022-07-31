import axios from 'axios';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Interface
import { Post } from '../interfaces/post';

// MUI
import { Container, Grid, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import MainPageCard from './MainPageCard';
import MainPageList from './MainPageList';
import Typography from '@mui/material/Typography';

function MainPage() {
  const params = useParams<{ id: string }>();

  // State
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPost, setCurrentPost] = useState<Post>();

  useEffect(() => {
    // Get post from api and set state
    const getPosts = async () => {
      try {
        const postList = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(postList.data);

        if (params?.id) {
          const currentP = postList.data.find((p: Post) => p.id === Number(params.id));
          setCurrentPost(currentP);
        } else {
          // Sets initial currentPost to index 0
          setCurrentPost(postList.data[0]);
        }
      } catch (error) {
        console.log(`Sorry, we couldn't get your posts.`, error);
      }
    };
    getPosts();
  }, [params.id]);

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography>My Basic App</Typography>
        </Toolbar>
      </AppBar>

      {/* Main Page Content */}
      <Container
        sx={{
          paddingTop: 12
        }}>
        <Grid container item spacing={3}>
          {/* Left Side */}
          <Grid item sm={12} md={4}>
            <MainPageList posts={posts} />
          </Grid>
          {/* Right side */}
          <Grid item sm={12} md={8}>
            <MainPageCard currentPost={currentPost} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default MainPage;
