import { Tag } from "@/components/about-me/BoxExperience";
import Image from "next/image";
import { BLOGLIST } from "@/utility/constant";
import BackButton from "@/components/blog/BackButton";

export async function generateStaticParams() {
  // const posts = await fetch('https://.../posts').then((res) => res.json())
 
  // return posts.map((post) => ({
  //   slug: post.slug,
  // }))

  return BLOGLIST.map((item) => ({
    slug: item.slug.current
  }))
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}){
  const slug = (await params).slug

  return (
    <div className="flex flex-col p-[20px]">
      <div className="grid grid-cols-12 gap-[40px]">
        <div className="col-span-2 mx-auto">
          <BackButton />
        </div>
        <div className="col-span-6 aspect-[4/3] relative" >
          <Image
            src={"https://picsum.photos/id/3/720"}
            alt="Image Picsum"
            fill
            objectFit="cover"
          />
        </div>
        <div className="col-span-4 flex flex-col justify-center leading-none">
          <h1 className="text-white text-[32px] font-bold mb-[10px]">{slug}</h1>
          <span className="text-white mb-[5px]">By Machmud Effendi</span>
          <span className="mb-[10px]">Feb 25, 2025</span>
          <div className="flex flex-row gap-[10px] leading-none">
              <Tag list={"front-end, ui/ux"}/>
            </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-[40px] mt-10">
        <div className="col-span-2"></div>
        <div className="col-span-6 blog-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac elit tellus. Fusce pretium nulla quis sagittis finibus. Duis dictum, ligula sit amet fringilla semper, mi tellus volutpat dui, id vehicula nunc ex vel eros. Nulla viverra risus id fermentum semper. Quisque nec neque urna. Donec non tincidunt lectus. Maecenas risus erat, ornare id scelerisque eget, cursus et ante. Praesent vitae vehicula elit, eget sodales dolor. Curabitur vulputate turpis eu elit elementum auctor. Quisque dignissim dictum nisi, ac pellentesque mi sagittis ut. Aenean nec dolor nec turpis luctus bibendum. In pretium condimentum orci nec faucibus.</p>
          <h2>Praesent vulputate pharetra quam</h2>
          <p>rhoncus ornare odio tempor vel. Praesent luctus nisi ac tincidunt vestibulum. Phasellus vitae felis dolor. Nullam sit amet eros lorem. Vestibulum ullamcorper, sem eu lobortis ullamcorper, velit turpis tempus erat, a pretium leo dolor a massa. Praesent in ipsum tristique, commodo justo eu, facilisis erat. Quisque semper varius nibh id ornare. Proin massa purus, pharetra a pharetra nec, feugiat vel neque. Donec sed urna nec elit semper euismod. Quisque sodales dui magna. Aliquam blandit diam rhoncus auctor accumsan. Donec purus tellus, sollicitudin tristique neque ut, aliquet commodo leo. Aliquam posuere pellentesque metus, ut luctus velit. Pellentesque eu magna mollis, molestie ipsum eget, hendrerit nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer bibendum massa semper tellus scelerisque malesuada.</p>
          <p>Nulla lobortis arcu id elit convallis lobortis. Etiam vitae sem in neque tempus auctor. Nulla condimentum feugiat libero. Fusce sed porta libero, nec convallis justo. Integer pretium, elit ac placerat ultricies, nisl nibh tristique est, vel gravida mauris magna ultricies augue. Ut eget odio rutrum, eleifend nunc nec, euismod lorem. Nam egestas ultrices velit, eu fermentum ligula faucibus in. In tincidunt tellus vel tempus malesuada. Etiam quis erat sit amet mi dignissim pharetra. Curabitur odio elit, pretium sit amet metus non, suscipit hendrerit neque. Suspendisse mattis lectus sed commodo vehicula.</p>
          <h2>In sagittis diam id viverra tempus</h2>
          <p>Pellentesque condimentum tortor sit amet neque feugiat elementum. Cras fringilla eget risus consequat ultrices. Aenean feugiat dui vel dignissim elementum. Aliquam dolor massa, sollicitudin luctus eleifend cursus, dapibus eu eros. Duis quis enim venenatis, posuere orci nec, auctor eros. Sed fermentum ligula id lectus tempor venenatis id id arcu. Phasellus interdum purus a arcu pharetra, sit amet consectetur justo auctor. Suspendisse rhoncus sit amet augue at ullamcorper.</p>
          <p>Fusce scelerisque maximus purus hendrerit interdum. Ut congue, tortor vel sollicitudin sollicitudin, tellus nisl pretium nibh, gravida sodales nunc metus vel arcu. Quisque tincidunt, ipsum in dapibus molestie, augue nunc tristique purus, cursus semper est dolor ut felis. Sed ullamcorper consectetur nulla vel tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer in eros lorem. Aliquam et sodales risus.</p>
        </div>
        <div className="col-span-4"></div>
      </div>
    </div>
  )
}