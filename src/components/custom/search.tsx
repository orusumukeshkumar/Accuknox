import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react';

export function SearchBar({value,onChange}:{value:string,onChange:any}) {
  return (
    <div className='flex flex-row rounded m-2  h-7 lg:w-60 md:w-56 sm:w-48 bg-white border-none'>
        <Search className='lg:h-6  lg:w-6 md:h-5 md:w-5 sm:h-4 sm:w-4 mx-2 my-auto text-blue-400 '/>
      <Input
        type='search'
        placeholder='Search anything...'
        value={value}
        onChange={onChange}
        className=' border-none mr-2 h-6 text-gray-500 outline-none flex-1 bg-white my-auto lg:text-lg md:text-md sm:text-sm'
      />
    </div>
  )
}
