import ArticleGalery from "./ArticleGalery";
import Comment from "./Comment";
import ShowMoreText from "./ShowMoreText";

const Article = () => {
  return (
    <section className="py-7 px-6 bg-white rounded-[20px]">
      <p className="text-xs text-[#9395B8]">
        Спортивная Борьба 12 марта, 2024 в 16:03
      </p>
      <h2 className="text-xl text-[#06082C] font-semibold mt-3 mb-[20px]">
        Илья Бессонов дал интервью для телеканала Россия-1
      </h2>

      <ShowMoreText text="sklmc skcksdc sdkvnksdjv ksjfnkjsd kjsnfkjsd kjsnfjks jkfskjnf kesjfnkjsdfn skjdnksjdg  sdkvksdv sdkvnsdkv sdkjvnsdkjv skdnvksdnv skdvnksdjv skdnvskdjnv sjkdnvkjsdvn skdjvnjsdkvn sdkjvnd v sdjknvjksdv jskdnvkjsdnv sdjvnkjsdv sjkdnvkjsdv sjkdvjksdv sjkdnvkjsdv sjkdnvjksd v skjdvnsjk dvsjkdvnsdkjv jskvjksdv jskdvnjskdv sjkdnvksjdv jsknvkjs dvjsndvks vskjdnvksjdnv skdjvnskj vskdjvndv " />
      <ArticleGalery />
      <div className="mt-4">
        <Comment />
      </div>
    </section>
  );
};

export default Article;
