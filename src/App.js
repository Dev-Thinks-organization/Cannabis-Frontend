import logo from './logo.svg';
import './App.css';
import {useState,useEffect}from 'react'
import Filters from "./components/Filters";
import ItemSection from "./components/ItemSection";
import NavBar from "./components/NavBar";
import  Axios  from 'axios';

import SearchSection from "./components/SearchSection";
function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [category, setCategory] = useState(null);
  const [count, setCount] = useState(0);
  const [benefits, setBenefits] = useState("");
  const [selectedBenefit,setSelectedBenefit]=useState("")
  const [maxPrice, setMaxPrice] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [page,setPage]=useState(1);
  const [totalPage,setTotalPages]=useState(0);
  const [selectedCategory,setSelectedCategory]=useState(null)
  const getCategories =async()=>{
    const res = await Axios.get("http://localhost:8000/api/category")
    console.log(res);
    setCategory(res.data.results)
}
const getBenefits =async()=>{
  const res = await Axios.get("http://localhost:8000/api/benefits")
  console.log(res);
  setBenefits(res.data)
 
}
useEffect(()=>{
  getCategories()
  getBenefits()
},[])
  return (
    <div className="">
    <NavBar />
    <SearchSection
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
    <div className="flex flex-col md:flex-row md:justify-start md:items-start">
      <Filters
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
      <ItemSection count={count} data={searchResults}  searchText={searchText} page={page} setPage={setPage} totalPage={totalPage}
      setTotalPages={setTotalPages}/>
    </div>
  </div>
  );
}

export default App;
