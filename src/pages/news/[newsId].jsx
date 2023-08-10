import RootLayout from "@/components/Layouts/RootLayout";
import { useGetNewsByIdQuery } from "@/redux/api/api";
import {
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Col, Image, Row } from "antd";
import { useRouter } from "next/router";

const NewsDetailsPage = ({}) => {
  const router = useRouter();
  const { data, isLoaing, isError, error } = useGetNewsByIdQuery(
    router.query.newsId
  );
  const news = data;
  return (
    <Row style={{ marginTop: "80px", alignItems: "center" }}>
      <Col md={6} lg={12}>
        <Image
          alt="example"
          src={news?.image_url}
          width={500}
          height={300}
          responsive
        />
      </Col>
      <Col md={6} lg={12} style={{ paddingLeft: "20px" }}>
        <h1 style={{ fontSize: "30px" }}>{news?.title}</h1>
        <span
          style={{
            color: "gray",
            display: "block",
            fontSize: "20px",
          }}
        >
          <UserOutlined /> {news?.author}
        </span>
        <div
          className="line"
          style={{
            height: "5px",
            margin: "20px 0",
            background: "#000",
            width: "100%",
          }}
        ></div>

        <p
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            color: "gray",
            margin: "10px 0px",
            fontSize: "20px",
          }}
        >
          <span>
            <CalendarOutlined /> {news?.release_date}
          </span>
          <span>
            <CommentOutlined /> {news?.comment_count} Comments
          </span>
          <span>
            <ProfileOutlined /> {news?.category}
          </span>
        </p>

        <p style={{ fontSize: "25px", fontWeight: "lighter" }}>
          {news?.description}
        </p>
      </Col>
    </Row>
  );
};

export default NewsDetailsPage;

NewsDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/news/${params.newsId}`);
  const data = await res.json();
  return {
    props: {
      news: data,
    },
  };
};
