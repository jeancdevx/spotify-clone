'use client'

import * as RadixSlider from '@radix-ui/react-slider'

const Slider = ({ value = 1, onChange }) => {
  const handleChange = (newValue) => {
    onChange?.(newValue[0])
  }

  return (
    <RadixSlider.Root
      className='relative flex h-10 w-full touch-none select-none items-center'
      defaultValue={[value]}
      value={[value]}
      onValueChange={handleChange}
      max={1}
      step={0.01}
      aria-label='Volume'
    >
      <RadixSlider.Track className='relative h-1 grow rounded-full bg-neutral-600'>
        <RadixSlider.Range className='absolute h-full rounded-full bg-white' />
      </RadixSlider.Track>
    </RadixSlider.Root>
  )
}

export default Slider
