"use client";
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import Toast from "../../utils/Toast";
import { useRouter } from "next/navigation";
import Trix from "trix";

export default function Upload() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    img: null,
  });

  const trixEditorRef = useRef(null);

  const handleChange = (e) => {
    const { name, type, files } = e.target;
    const val = type === "file" ? files[0] : e.target.value;

    if (type === "file" && val) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: event.target.result,
          fileName: val.name,
        }));
      };
      reader.readAsDataURL(val);
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: val,
      }));
    }
  };

  const handleSubmit = async (e) => {
    const slug = window.location.search.split("=")[1];
    e.preventDefault();
    console.log(formData);
    await axios
      .post("/api/services/" + slug, formData)
      .then((res) => {
        Toast.fire({
          icon: "success",
          title: "Successfully updated data!",
        }).then(() => {
          router.push("/dashboard/services");
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getservicesById = (slug) => {
    axios.get(`/api/services/${slug}`).then((res) => {
      setFormData(res.data);
    });
  };

  useEffect(() => {
    document.addEventListener("trix-change", (e) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        body: e.target.value,
      }));
    });

    const slug = window.location.search.split("=")[1];
    getservicesById(slug);
  }, []);

  return (
    <div className="p-5 mt-24">
      <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md flex flex-col space-y-4">
        <h2 className="text-xl font-bold">Create services</h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
          encType="multipart/form-data"
        >
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="p-3 border mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="body"
              className="block text-sm font-medium text-gray-700"
            >
              Body
            </label>
            <input id="x" name="content" className="hidden" />
            <trix-editor input="x" ref={trixEditorRef}>
              {formData.body && (
                <div dangerouslySetInnerHTML={{ __html: formData.body }} />
              )}
            </trix-editor>
          </div>
          <div>
            <label
              htmlFor="img"
              className="block text-sm font-medium text-gray-700"
            >
              Image
            </label>
            <input
              type="file"
              id="img"
              name="img"
              accept="image/*"
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md shadow-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
