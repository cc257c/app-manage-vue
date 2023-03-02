<template>
  <div style="margin: 16px;">
    <div style="margin-bottom: 16px;padding:10px ;background-color: white;">
      <FilterForm :schemas="schemas" :map="true" ref="method" @success="handleSuccess"></FilterForm>
    </div>
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, text }">
        <template v-if="column.key === 'ktp_url'">
          <img :src="text" alt="" style="width: 350px;
        ">
        </template>
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts" setup>
import { BasicTable, useTable } from '/@/components/Table';
import { columns, schemas } from './tableData';
import FilterForm from '/@/custom/components/Form/filter.vue';
import { list } from '/@/api/window';
const [registerTable, { setLoading, setTableData }] = useTable({
  title: '物理机列表',
  columns,
  striped: false,
  showTableSetting: true,
  bordered: true,
  showIndexColumn: false,
  canResize: true,
  pagination: false,
});
const handleSuccess = async (receivedata: any) => {
  try {
    setLoading(true);
    let result = await list({ ...receivedata });
    setTableData(result.items);
  } finally {
    setLoading(false);
  }
};
</script>