import { Button } from '@/components/ui/button'
import { createBoard } from '@/lib/query/board.queies';
import { useOrganization } from '@clerk/nextjs';
import { Plus } from 'lucide-react'
import { mutate } from 'swr';
import useSWRMutation from 'swr/mutation'

const NewBoard = () => {

  const { trigger, isMutating } = useSWRMutation('/api/user', createBoard, /* options */)
  const { organization } = useOrganization()

  const handleClick = async () => {
    try {
      if (!organization) return
      const result = await trigger( /* options */)
      console.log(result)
      mutate(`/api/board/${organization.id}`)
    } catch (e) {
      console.error(e)
    }
  };


  return (
    <Button onClick={handleClick} disabled={isMutating} className='group cursor-pointer w-full h-full aspect-[5/5] pb-0 flex items-center justify-center p-3 bg-blue-500 hover:bg-blue-600 rounded-lg' asChild>
      <div className='flex flex-col items-center'>
        <Plus size={70} className='h-20 w-20' />
        <p className='text-lg font-semibold  text-white'>Create Board</p>
      </div>
    </Button>
  )
}

export default NewBoard