<script setup lang="jsx">
import { ref, computed } from 'vue';
import { Input } from '@jenniferjiajie/ui-component';
import { DatePicker } from '@jenniferjiajie/ui-component';
import { Table } from '@jenniferjiajie/ui-component';
import { RiSearch2Line } from 'vue-remix-icons';

const val = ref('');
const monthVal = ref('');
const yearVal = ref('');
const dateVal = ref('');

const columns = computed(() => ([{
  title: '日期',
  dataIndex: 'date',
  key: 'date',
},
{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
},
{
  title: '住址',
  dataIndex: 'address',
  key: 'address',
  width: 700,
}, {
  title: '操作',
  dataIndex: 'action',
  key: 'action',
  fixed: true,
  render: (h, { row }) => (
    <div onClick={handleClick(row)}>点击</div>
  ),
}]));

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
];

const handleClick = (row) => {
  return () => {
    console.log(row);
  }
};
</script>

<template>
  <div style="margin-bottom: 10px">
    <Input
      v-model="val"
      clearable
      show-word-limit
      maxlength="30"
      :prefix-icon="RiSearch2Line"
    >
      <template #prepend>
        <RiSearch2Line />
      </template>
      <template #append>
        <RiSearch2Line />
      </template>
    </Input>
  </div>
  

  <div style="margin-bottom: 10px">
    <DatePicker v-model="monthVal" type="month" />
  </div>
  <div style="margin-bottom: 10px">
    <DatePicker v-model="yearVal" type="year" />
  </div>
  <div style="margin-bottom: 10px">
    <DatePicker v-model="dateVal" />
  </div>

  <div style="margin-bottom: 10px">
    <Table
      :data="tableData"
      :columns="columns"
      stripe
      border
      height="100"
    />
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

svg {
  width: 20px;
}
</style>
