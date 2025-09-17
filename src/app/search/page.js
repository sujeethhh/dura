import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SearchResults from '@/components/SearchResults'

export const metadata = {
  title: 'Search - Edura',
  description: 'Search for courses, instructors, and topics on Edura.',
}

export default function SearchPage({ searchParams }) {
  return (
    <div className="min-h-screen">
      <Header />
      <SearchResults query={searchParams.q} />
      <Footer />
    </div>
  )
}