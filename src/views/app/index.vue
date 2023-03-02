<template>
  <div style="margin: 16px;">
    <div style="margin-bottom: 16px;padding:10px ;background-color: white;">
      <FilterForm :schemas="schemas" :map="true" ref="method" @success="handleSuccess"></FilterForm>
    </div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增</a-button>
        <Tooltip>
          <template #title>刷新</template>
          <RedoOutlined style="font-size: 19px;" @click="handleRedo"></RedoOutlined>
        </Tooltip>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction :actions="[
            {
              icon: 'mdi:arrow-right-thick',
              onClick: handleDetails.bind(null, record),
            }
          ]" />
        </template>
      </template>
    </BasicTable>
    <DataDrawer @register="registerDrawer" @successAdd="handleAdd" />
    <DetailsDrawer @register="registerDrawerDetails" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { BasicTable, TableAction, useTable } from '/@/components/Table';
import { useDrawer } from '/@/components/Drawer';
import DataDrawer from './DataDrawer.vue';
import DetailsDrawer from './DetailsDrawer.vue';
import { columns, schemas } from './tableData';
import { Tooltip } from 'ant-design-vue';
import { RedoOutlined } from '@ant-design/icons-vue';
import FilterForm from '/@/custom/components/Form/filter.vue';
import { list } from '/@/api/app';

const method = ref();
const [registerDrawer, { openDrawer }] = useDrawer();
const [registerDrawerDetails, { openDrawer: openDrawerDetails }] = useDrawer();
const [registerTable, { setTableData, setLoading }] = useTable({
  title: '',
  columns,
  striped: false,
  showTableSetting: true,
  bordered: true,
  showIndexColumn: false,
  canResize: true,
  tableSetting: {
    redo: false
  },
  pagination: false,

  actionColumn: {
    width: 150,
    title: '操作',
    dataIndex: 'action',
  },
});
const handleDetails = (record: Recordable) => {
  openDrawerDetails(true, {
    data: record
  });
}
const handleCreate = () => {
  openDrawer(true, {
    isUpdate: false
  });
}
const handleSuccess = async (receivedata: any) => {
  try {
    setLoading(true);
    let result = await list({ ...receivedata });
    setTableData(result.items);
  } finally {
    setLoading(false);
  }
};
const handleRedo = () => {
  method.value.handleSubmit()
};
const handleAdd = () => {
  method.value.handleSubmit()
};
</script>
<style lang="less" scoped>
.download-icon:hover {
  cursor: pointer;
}

::v-deep(.ant-divider-vertical) {
  display: none;
}
</style>
