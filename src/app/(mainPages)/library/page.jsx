import Navigation from "./_components/Navigation"
import Categories from "./_components/Categories"
import SingleLibrary from "./_components/SingleLibrary"
import LibraryImg from "@public/plants/libraryImg.webp";

const libraries = [
	{ img: LibraryImg.src, date: '22.04.2024', title: 'Lorem ipsum dolor sit amet consectetur.', description: 'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.' },
	{ img: LibraryImg.src, date: '22.04.2024', title: 'Lorem ipsum dolor sit amet consectetur.', description: 'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.' },
	{ img: LibraryImg.src, date: '22.04.2024', title: 'Lorem ipsum dolor sit amet consectetur.', description: 'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.' },
]

const LibraryPage = () => {
	return (
		<>
			<Navigation />
			<Categories />
			<div className="mt-8 flex justify-center flex-wrap gap-12">
				{
					libraries.map((library, index) => {
						return (
							<SingleLibrary library={library} key={index} />
						)
					})
				}
			</div>
		</>
	)
}

export default LibraryPage
