import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from './Navbar'
import Footer from './footer'
import SeoHead from './SeoHead'
import { absoluteUrl } from '@/lib/seo'

const SeoBlogPage = ({ blog, canonicalPath }) => {
  if (!blog) {
    return null
  }

  const seoBoostParagraphs = [
    `If you are researching <mark>${blog.keyword}</mark>, focus on proven quality indicators before deciding. Look at healed work, hygiene standards, and the quality of consultation communication. A good studio never hides process details and always explains realistic timelines. At <strong>inkcitythetattoostudio.com</strong>, clients are encouraged to ask questions so every choice is informed and safe from the beginning.`,
    `A strong SEO topic is useful only when content solves real problems. That is why this guide on <strong>${blog.keyword}</strong> includes practical checkpoints you can use immediately: design planning, safety habits, aftercare discipline, and long-term maintenance. These essentials are often skipped by trend-heavy pages, but they make the biggest difference in results that remain clean and attractive over time.`,
    `Every skin type responds differently, so your <em>${blog.keyword}</em> plan should be personalized. Professional artists evaluate body placement, exposure to sunlight, and lifestyle factors like sports, workwear, and travel. These details affect healing speed and final appearance. Personalized planning protects your comfort while improving how the work settles during recovery and beyond.`,
    `Clients often compare studios by price alone, but permanent body art should be compared by quality process. Safe setup, controlled execution, and follow-up support are worth more than quick discounts. Whether you are exploring <mark>${blog.keyword}</mark> for the first time or upgrading an old idea, quality decisions today prevent expensive corrections later.`,
    `Another overlooked factor is design readability after healing. Fine details can blur if scale and placement are not planned correctly. An expert review helps simplify or restructure artwork so your <strong>${blog.keyword}</strong> remains clear for years, not just during fresh photos. This is where experienced guidance creates long-term value.`,
    `For better outcomes, document your progress with clear photos in consistent lighting. Tracking stages helps you see small improvements that are easy to miss day-to-day. It also supports better consultation feedback. When discussing <em>${blog.keyword}</em>, visual records allow your artist to make precise adjustments and keep quality aligned with your original goal.`,
    `Aftercare is not optional; it is the second half of quality. Gentle cleansing, suitable moisturizer, and sun protection protect both skin and design integrity. Even excellent work can heal unevenly without discipline. Anyone serious about <mark>${blog.keyword}</mark> should treat aftercare as a routine commitment, not a temporary suggestion.`,
    `Building trust with your artist improves every stage of the process. Clear communication on pain tolerance, style preferences, and scheduling needs creates smoother sessions and better results. Trusted studios such as <strong>inkcitythetattoostudio.com</strong> prioritize transparency so clients feel confident from consultation to final review.`,
    `Search engines reward pages that answer intent deeply, and people benefit from practical clarity. This is why educational content around <strong>${blog.keyword}</strong> should combine expert insight with actionable steps. When you apply these principles, you reduce risk, improve appearance, and make decisions that support long-term satisfaction.`,
    `The smartest way to approach <em>${blog.keyword}</em> is to combine creativity with caution. Choose a studio with consistent reviews, verified hygiene, and a portfolio that matches your preferred style. With this approach, your final result becomes more than a trend; it becomes a confident and lasting expression of your identity.`
  ]

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: blog.title,
              description: blog.description,
              datePublished: blog.date,
              dateModified: blog.date,
              mainEntityOfPage: absoluteUrl(canonicalPath),
              author: { '@type': 'Organization', name: 'Ink City Tattoo Studio' },
              publisher: {
                '@type': 'Organization',
                name: 'Ink City Tattoo Studio',
                logo: {
                  '@type': 'ImageObject',
                  url: absoluteUrl('/images/logowhite.png')
                }
              },
              image: absoluteUrl(blog.image)
            })
          }}
        />
      </Head>
      <SeoHead
        title={blog.title}
        description={blog.description}
        keywords={blog.keywords}
        canonicalPath={canonicalPath}
        image={blog.image}
        type="article"
      />

      <Navbar />
      <div className="min-h-screen bg-[#0039a6] text-white">
        <header className="relative h-[50vh] w-full">
          <Image src={blog.image} alt={blog.title} fill className="object-cover brightness-50" priority />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <h1 className="text-3xl md:text-6xl font-bold text-center">{blog.title}</h1>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-16">
          <article className="prose prose-lg prose-invert">
            <header className="mb-8 border-b border-gray-600 pb-5">
              <p className="text-sm mb-2">
                <time dateTime={blog.date}>Published: {blog.date}</time>
                <span className="mx-2">|</span>
                <span>{blog.readTime}</span>
              </p>
              <p className="text-sm">
                Focus keyword: <strong>{blog.keyword}</strong> | Website: <strong>inkcitythetattoostudio.com</strong>
              </p>
            </header>

            {blog.sections.map((section, sectionIndex) => (
              <section key={`${section.heading}-${sectionIndex}`} className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{section.heading}</h2>
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p
                    key={`${section.heading}-paragraph-${paragraphIndex}`}
                    className="mb-5"
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
              </section>
            ))}

            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Expert SEO Insights on <mark>{blog.keyword}</mark>
              </h2>
              {seoBoostParagraphs.map((paragraph, index) => (
                <p
                  key={`seo-boost-${index}`}
                  className="mb-5"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </section>

            <footer className="mt-10 border-t border-gray-600 pt-6">
              <p className="text-sm">
                Tags: {blog.keyword}, tattoo studio Ujjain, custom tattoo consultation, tattoo safety, inkcitythetattoostudio.com
              </p>
            </footer>
          </article>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default SeoBlogPage
