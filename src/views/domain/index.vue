<template>
  <div style="margin: 16px;">
    <div style="margin-bottom: 16px;padding:10px ;background-color: white;">
      <FilterForm :schemas="schemas" :map="true" ref="method" @success="handleSuccess"></FilterForm>
    </div>
    <BasicTable @register="registerTable">
    </BasicTable>
  </div>
</template>
<script lang="ts" setup>
import { BasicTable, useTable } from '/@/components/Table';
import { columns, schemas } from './tableData';
import FilterForm from '/@/custom/components/Form/filter.vue';
import { list } from '/@/api/domain';
const [registerTable, { setLoading, setTableData }] = useTable({
  title: 'ๅๅๅ่กจ',
  columns,
  striped: false,
  showTableSetting: true,
  bordered: true,
  showIndexColumn: false,
  canResize: true,
  pagination: false,
  immediate: true,
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