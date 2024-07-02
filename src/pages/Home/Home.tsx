import Container from "@/components/Container";
import { Article, TapeFilter } from "./Components";

const Home = () => {
  return (
    <div className="bg-[#F1F3F7]">
      <Container>
        <div className="grid grid-cols-12 gap-6 pt-[26px]">
          <div className="md:col-span-8 col-span-12">
            <Article />
          </div>
          <div className="col-span-4 md:block hidden">
            <TapeFilter />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
