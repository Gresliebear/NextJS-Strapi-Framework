import axios from 'axios';
import { NextPage, GetServerSideProps } from 'next';

interface BlogPost {
  id: number;
  attributes: {
    Title: string;
    Paragraph: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

interface ApiResponse {
  data: BlogPost[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface HomeProps {
  blogPosts?: BlogPost[];
  error?: Error;
}

const Home: NextPage<HomeProps> = ({ blogPosts, error }) => {
  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <ul>
      {blogPosts?.map((post) => (
        <li key={post.id}>
          <h3>{post.attributes.Title}</h3>
          <p>{post.attributes.Paragraph}</p>
        </li>
      ))}
    </ul>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  try {
    const res = await axios.get('http://127.0.0.1:1337/api/blogposts');
    const apiResponse: ApiResponse = res.data;
    const blogPosts: BlogPost[] = apiResponse.data;
    return { props: { blogPosts } };
  } catch (error) {
    return { props: { error: error.message } };
  }
};

export default Home;