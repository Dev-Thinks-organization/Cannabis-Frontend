import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect, useRef, useContext } from "react";
import Filters from "./components/Filters";
import ItemSection from "./components/ItemSection";
import NavBar from "./components/NavBar";
import Axios from "axios";
import SearchSection from "./components/SearchSection";
import Footer from "./components/Footer";
import Message from "./components/Message";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import ReviewsCard from "./components/ReviewsCard";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import howItWorks from "./Assets/howItWorks.svg";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/outline";
import newHowItWorks from "./Assets/newHowItWorks.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faForwardStep,
  faBackwardStep,
} from "@fortawesome/free-solid-svg-icons";
function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [category, setCategory] = useState(null);
  const [count, setCount] = useState(0);
  const [benefits, setBenefits] = useState([]);
  const [selectedBenefit, setSelectedBenefit] = useState("");
  const [maxPrice, setMaxPrice] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPages] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [sort, setSort] = useState("-popular_ind");
  const scrollRef = useRef()
  // Function to scroll left 
  const scrollLeft = () => {
    scrollRef.current.scrollLeft-=200;
    console.log("first", scrollRef.current.scrollLeft)
  }
  // Function to scroll right
  const scrollRight = () => {
    scrollRef.current.scrollLeft+=200;
    console.log("second", scrollRef.current.scrollRight)
  }
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
  console.log(searchResults);


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
      <div className="container    mx-auto px-4">
        <div className="w-full rounded-t-xl bg-white">
          <Message />
        </div>
      </div>

      <div className="container  mx-auto flex flex-col sm:items-center md:flex-row md:items-start ">
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
            page={page}
            setPage={setPage}
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
      <div className="flex items-center justify-center bg-[#CCFF33] md:bg-[#B5E9FF] p-4 text-center font-sans text-xl font-normal text-[#004B23]">
        <h1>
          Happy Customers? <br /> We've G ot 'Em! See what they have to say
          about how we've revolutionized how they find CBD products online!
        </h1>
      </div>

      {/* Cards Section  */}
      <section
        className="container mx-auto max-h-max min-h-[367px] flex flex-row justify-center items-center "
        id="reviews"
      >
        
      
      <FontAwesomeIcon
              className="cursor-pointer text-[#004B23]  p-4 "
              icon={faBackwardStep}
              onClick={() => scrollLeft()}
            />
<div className="flex  overflow-x-hidden overflow-y-hidden" ref={scrollRef}>
{typeof searchResults !== 'undefined' && searchResults.length === 0  ? (
             <div className="pt-18 container mx-auto w-full  pl-6 pr-6">
             <h1 className="text-normal font-bold">No Reviews To Show</h1>
           </div>
          ) : (
        
             
              searchResults.map((reviews, id) => (
              <ReviewsCard
                itemId={id}
                key={id}
                name={reviews.recent_customer_name}
                description={reviews.recent_customer_desc}
                rating={reviews.recent_customer_score}
                title={reviews.recent_customer_title}
                picture={reviews.img_source_link}
                link={reviews.link_to_item}
              />
            ))
        
          )}
</div>

<FontAwesomeIcon
              className="cursor-pointer text-[#004B23] p-4 "
              icon={faForwardStep}
              onClick={() =>scrollRight()}
            />
      </section>
      <section className=" md:p-24 pt-14 pb-4" id="how-it-works">
        <div className=" container mx-auto flex justify-center ">
          <img src={newHowItWorks} className=" md:w-[810px] hidden md:block" />
          <img src={howItWorks} className="md:hidden"/>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
