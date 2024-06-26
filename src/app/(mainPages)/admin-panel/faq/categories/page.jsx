"use client";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

const FaqCategoriesPage = () => {
  return (
    <>
      <div className="max-w-[800px]">
        <h2 className="font-semibold text-lg tracking-wider">
          Add New Category
        </h2>
        <input
          type="text"
          placeholder="Enter Title here"
          className="my-5 w-full border border-[#68BB59] rounded-md px-4 py-2.5 opacity-40 placeholder:text-black outline-none"
        />
      </div>
      <div>
        {/* <FroalaEditorComponent className="static" tag="textarea" /> */}
      </div>
    </>
  );
};

export default FaqCategoriesPage;
