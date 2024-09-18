import React from 'react'
import type { NameValue } from '~/lib/type'
import { Tabs, TabsList, TabsTrigger } from './tabs';

type SimpleTabsProps = {
  data: NameValue[]
  defaultValue?: string,
  onChange?: (value: string) => void;
}

export default function SimpleTabs(props: SimpleTabsProps)
{
  const { data, defaultValue, onChange } = props;
  return (
    <Tabs defaultValue={defaultValue} onValueChange={onChange}>
      <TabsList className="w-full">
        {data.map(item =>
        {
          return (
            <TabsTrigger key={item.value} className='w-full' value={item.value}>{item.name}</TabsTrigger>
          )
        })}
      </TabsList>
    </Tabs>

  )
}
