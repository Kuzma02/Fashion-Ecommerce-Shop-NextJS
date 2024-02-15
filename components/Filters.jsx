"use client";

import React, { useEffect } from "react";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { HiXMark } from "react-icons/hi2";
import { FaChevronDown } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { usePathname, useRouter } from "next/navigation";

const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-edition", label: "Women new edition" },
      { value: "women", label: "Women" },
    ],
  },
  {
    id: "sizes",
    name: "Sizes",
    options: [
      { value: "xs", label: "XS" },
      { value: "s", label: "S" },
      { value: "m", label: "M" },
      { value: "l", label: "L" },
      { value: "xl", label: "XL" },
      { value: "2xl", label: "2XL" },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Filters = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const pathname = usePathname();
  const { replace } = new useRouter();
  const [ inputCategory, setInputCategory ] = useState({box1: {text: "women", isChecked: false}, box2: {text: "women new edition", isChecked: false}, priceFilter: {text: "price", value: 1000}});

  const filterProducts = (e) => {
    console.log(e.target);
  }

  useEffect(() => {
    const params = new URLSearchParams();
    
    params.set("women", inputCategory.box1.isChecked);
    params.set("womenNewEdition", inputCategory.box2.isChecked);
    params.set("price", inputCategory.priceFilter.value)
    replace(`${pathname}?${params}`);


  }, [inputCategory])
  
  return (
    <div className="px-10 my-5">
      <h2 className="text-xl mb-2">Category filter:</h2>
      <form action="" onChange={(e) => filterProducts(e)}>
      <div className="form-control">
  <label className="flex gap-x-2">
    <input type="checkbox" className="checkbox" onChange={(e) => setInputCategory({...inputCategory, box1: {text:"women", isChecked: e.target.checked}})} value={inputCategory.box1.isChecked} />
    <span className="label-text text-lg">Women</span> 
  </label>
</div>

<div className="form-control">
  <label className="flex gap-x-2">
    <input type="checkbox" className="checkbox" onChange={(e) => setInputCategory({...inputCategory, box2: {text:"women new edition", isChecked: e.target.checked}})} value={inputCategory.box2.isChecked} />
    <span className="label-text text-lg">Women new edition</span> 
  </label>
</div>

<h3 className="text-xl my-2">Price filter:</h3>
<input type="range" min={0} max="1000" value={inputCategory.priceFilter.value} onChange={(e) => setInputCategory({...inputCategory, priceFilter: {text: "price", value: e.target.value}})} className="range" step="100" />
<div className="w-full flex justify-between text-xs px-2">
  <span>0</span>
  <span>200</span>
  <span>500</span>
  <span>700</span>
  <span>1000</span>
</div>
      </form>
    </div>
  );
};

export default Filters;
