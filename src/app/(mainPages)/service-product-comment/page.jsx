import Replies from "./_components/Replies";
import ServiceProductHeader from "./_components/ServiceProductHeader";
import ServiceProductName from "./_components/ServiceProductName";
import WriteTheNews from "./_components/WriteTheNews";

const ServiceProductCommentPage = () => {
  return (
    <div className="bg-white px-[98px] py-9">
      <ServiceProductHeader />
      <ServiceProductName />
      <WriteTheNews />
      <Replies />
    </div>
  );
};

export default ServiceProductCommentPage;
