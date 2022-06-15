import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import Filters from "./components/Filters";
import ItemSection from "./components/ItemSection";
import NavBar from "./components/NavBar";
import Axios from "axios";
import SearchSection from "./components/SearchSection";
import Footer from "./components/Footer";
import Message from "./components/Message";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import ReviewsCard from "./components/ReviewsCard";
import LeftArrow from "./components/LeftArrow";
import RightArrow from "./components/RightArrow";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import howItWorks from "./Assets/howItWorks.svg";
function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [category, setCategory] = useState(null);
  const [count, setCount] = useState(0);
  const [benefits, setBenefits] = useState("");
  const [selectedBenefit, setSelectedBenefit] = useState("");
  const [maxPrice, setMaxPrice] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPages] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sort, setSort] = useState("-popular_ind");

  const getCategories = async () => {
    try {
      const res = await Axios.get(
        "https://cba-backend.herokuapp.com/api/category/"
      );
      console.log(res);
      setCategory(res.data.results);
    } catch (error) {
      toast.error(
        "something went wrong while getting the Categories try refresing the page "
      );
    }
  };
  const getBenefits = async () => {
    try {
      const res = await Axios.get(
        "https://cba-backend.herokuapp.com/api/benefits/"
      );
      console.log(res);
      setBenefits(res.data);
    } catch (error) {
      toast.error(
        "something went wrong while getting the Benefits try refresing the page "
      );
    }
  };
  useEffect(() => {
    getCategories();
    getBenefits();
  }, []);
  return (
    <div className=" ">
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
      <NavBar />
      <SearchSection
        sort={sort}
        selectedBenefit={selectedBenefit}
        selectedCategory={selectedCategory}
        setCount={setCount}
        searchText={searchText}
        setSearchText={setSearchText}
        maxPrice={maxPrice}
        minPrice={minPrice}
        category={category}
        benefits={benefits}
        page={page}
        totalPage={totalPage}
        setTotalPages={setTotalPages}
        setPage={setPage}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />
      <div className="container    mx-auto px-6">
        <div className="bg-white w-full rounded-t-xl">
          <Message />
        </div>
      </div>

      <div className="flex  flex-col md:flex-row  sm:items-center md:items-start ">
        <div className="  hidden md:block">
          <Filters
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            setMinPrice={setMinPrice}
            category={category}
            benefits={benefits}
            setCategory={setCategory}
            selectedBenefit={selectedBenefit}
            setBenefits={setBenefits}
            setSelectedBenefit={setSelectedBenefit}
          />
        </div>

        <ItemSection
          sort={sort}
          setSort={setSort}
          count={count}
          data={searchResults}
          searchText={searchText}
          page={page}
          setPage={setPage}
          totalPage={totalPage}
          setTotalPages={setTotalPages}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          maxPrice={maxPrice}
          minPrice={minPrice}
          setMaxPrice={setMaxPrice}
          setMinPrice={setMinPrice}
          category={category}
          benefits={benefits}
          setCategory={setCategory}
          selectedBenefit={selectedBenefit}
          setBenefits={setBenefits}
          setSelectedBenefit={setSelectedBenefit}
        />
      </div>
      {/* bottom Message Section  */}
      <div className="bg-[#CCFF33] p-4 flex justify-center items-center text-center font-sans font-normal text-[#004B23] text-2xl">
        <h1>
          Happy Customers? <br /> We've G ot 'Em! See what they have to say
          about how we've revolutionized how they find CBD products online!
        </h1>
      </div>

      {/* Cards Section  */}
      <section className="max-h-max container mx-auto  " id="reviews">
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {searchResults &&
            searchResults.map((reviews) => (
              <ReviewsCard
                itemId={reviews.id}
                key={reviews.id}
                name={reviews.recent_customer_name}
                description={reviews.recent_customer_desc}
                rating={reviews.recent_customer_score}
                title={reviews.recent_customer_title}
                picture={reviews.img_source_link}
                link={reviews.link_to_item}
              />
            ))}
        </ScrollMenu>
      </section>
      <section className="p-28" id="how-it-works">
        <div className="container mx-auto fle">
          <img src={howItWorks} className="w-[1372px] h-[1303px]" />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
