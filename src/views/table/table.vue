<template>
    <div>
        <a-button type="primary" @click="exportExcel">点击导出表格</a-button>
        <a-upload name="file" :multiple="true" :beforeUpload="handleBeforeUpload" accept=".xls, .xlsx">
            <a-button type="primary" @click="handleUploadFile">点击导入表格</a-button>
        </a-upload>
        <a-button type="primary" @click="tabelOrder">表格展现的col顺序选择</a-button>
        <a-table :rowSelection="rowSelection" :columns="columns" :dataSource="data" id="tebleDemo">
            <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>
            <span slot="customTitle"><a-icon type="smile-o"/> Name</span>
            <span slot="tags" slot-scope="tags">
                <a-tag v-for="tag in tags" color="blue" :key="tag">{{tag}}</a-tag>
            </span>
            <span slot="action" slot-scope="text, record">
              <a href="javascript:;">Invite 一 {{record.name}}</a>
              <a-divider type="vertical"/>
              <a href="javascript:;">Delete</a>
              <a-divider type="vertical"/>
              <a href="javascript:;" class="ant-dropdown-link">
                More actions <a-icon type="down"/>
              </a>
            </span>
        </a-table>
        <br/>
      <!--
            模态框
      -->
        <a-modal
                title="Title"
                :visible="visible"
                @ok="handleOk"
                :confirmLoading="confirmLoading"
                @cancel="handleCancel"
        >
            <template v-for="(item,index) in columns">
                <p :key="item.key"><a-button @click="onChange($event,item)">{{item.dataIndex}}</a-button></p>
            </template>
            <template v-for="(item,index) in tag">
                <a-tag closable @close="log($event,item)">{{item.key}}</a-tag>
            </template>

        </a-modal>
    </div>
</template>
<script>
    const columns = [
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },{
        dataIndex: 'name',
        key: 'name',
        slots: { title: 'customTitle' },
        scopedSlots: { customRender: 'name' },
    }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    }, {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        scopedSlots: { customRender: 'tags' },
    }, {
        title: 'Action',
        key: 'action',
        dataIndex: 'action',
        scopedSlots: { customRender: 'action' },
    }];

    const data = [{
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    }, {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    }, {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    }];
    import excel from '@/libs/excel'
    export default{
        data(){
            return {
                tag:[],
                data,
                columns,
                tableData:[],
                tableTitle:[],
                file:null,
                visible:false,
                confirmLoading:false,

            }
        },
        computed:{
            rowSelection() {
                const { selectedRowKeys } = this;
                return {
                    onChange: (selectedRowKeys, selectedRows) => {
                        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                    },
                    getCheckboxProps: record => ({
                        props: {
                            disabled: record.name === 'Disabled User', // Column configuration not to be checked
                            name: record.name,
                        }
                    }),
                }
            }
        },
        methods:{
            initUpload () {
                this.file = null
                this.showProgress = false
                this.loadingProgress = 0
                this.tableData = []
                this.tableTitle = []
            },
            exportExcel(){
                if(this.data.length){
                    const params = {
                        title: ['name','Age','Address','Tags'],
                        key: ['name', 'age', 'address','tags'],
                        data: this.data,
                        autoWidth: true,
                        filename: '生成的表格'
                    }
                    excel.export_table_to_excel("tebleDemo","这个表格")
//                    excel.export_array_to_excel(params)
                }
            },
            handleUploadFile(){
                this.initUpload();
            },
            handleBeforeUpload(file){
                const fileExt = file.name.split('.').pop().toLocaleLowerCase()
                if (fileExt === 'xlsx' || fileExt === 'xls') {
                    this.readFile(file)
                    this.file = file
                } else {
                    /*

                     this.$Notice.warning({
                     title: '文件类型错误',
                     desc: '文件：' + file.name + '不是EXCEL文件，请选择后缀为.xlsx或者.xls的EXCEL文件。'
                     })


                     */

                }
                return false
            },
            // 读取文件
            readFile (file) {
                const reader = new FileReader()
                reader.readAsArrayBuffer(file)
                reader.onloadstart = e => {

                    // this.uploadLoading = true 上传进度条
                    // this.tableLoading = true 表格加载进度条
                    // this.showProgress = true 显示进度条
                }
                reader.onprogress = e => {
                    this.progressPercent = Math.round(e.loaded / e.total * 100)
                }
                reader.onerror = e => {
                    //this.$Message.error('文件读取出错')
                }
                reader.onload = e => {
                    //this.$Message.info('文件读取成功')

                     const data = e.target.result
                     const { header, results } = excel.read(data, 'array')
                     console.log("header",header);
                    console.log("results",results);
                    /*

                     const tableTitle = header.map(item => { return { title: item, key: item } })
                     this.tableData = results
                     this.tableTitle = tableTitle
                     console.log("results",results)
                     console.log("tableTitle",tableTitle)


                     */





                    // this.uploadLoading = false
                    // this.tableLoading = false
                    // this.showRemoveFile = true
                }
            },
            //表格的col顺序
            tabelOrder(){
                this.visible = true;
            },
            handleCancel(e) {
                console.log('Clicked cancel button');
                this.visible = false
            },
            handleOk(e) {
                //this.ModalText = 'The modal will be closed after two seconds';
                if(this.tag.length == this.columns.length){
                    this.confirmLoading = true;
                    setTimeout(() => {
                        this.visible = false;
                        this.confirmLoading = false;
                        this.columns = this.tag.slice(0,this.tag.length);
                        this.tag = [];
                    }, 2000);
                }else{

                }

            },
            onChange(e,item){
                /*

                 if(e.target.checked){
                 if(!this.isHasArr(item.key).num){
                 this.tag.push(item)
                 }
                 }else{
                 if(this.isHasArr(item.key).num){
                 let num = this.isHasArr(item.key).index;
                 console.log("num",num)
                 this.tag.splice(num,1)
                 }
                 }


                 */

                if(!this.isHasArr(item.key).num){
                    this.tag.push(item)
                }

            },
            log(e,item){
                e.preventDefault()
                let num = this.isHasArr(item.key).index
                console.log("item.key",item.key)
                this.tag.splice(num,1);
            },
            isHasArr(key){
                let json = {
                    num:0,
                    index:''
                };
                this.tag.map((item,index)=>{
                    if(item.key == key ){
                        json.num = 1;
                        json.index = index
                    }
                })
                return json;
            }
        }
    }
</script>
<style>

</style>