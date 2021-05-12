import React, { Component } from 'react'
import ProductItem from './ComponentOfProduct/ProductItem'
import FitterBox from './ComponentOfProduct/FitterBox';
import NodepageSwapp from './ComponentOfProduct/NodepageSwapp';
import PageLoad from './PageLoad';

export default class Product extends Component {
    constructor(props){
        super(props);

        this.state = {
            fittername : [],
            Sort_item : [],
            Sort_item_old : [],
            Sort_status : "item",   
            StyleCurrent : "Cpu"
        }
    }
    pagemax = 0


    componentDidUpdate = () =>{
        if(this.state.StyleCurrent !== this.props.style){
            this.componentDidMount()
            this.setState({
                StyleCurrent : this.props.style
            })
        }
    }

    componentDidMount =()=>{
        var a = this.props.style

        switch(a){
            case 'Cpu':
                this.setState({
                    fittername : ["TradeMark","Loai","Socket","Core","Threading"],
                    Sort_item : [["Amd","Intel"],["I3","I5","I7","I9","R3","R5","R7","R9","Celeron","Athlon","Pentium","ThreadRipper"],["Am4","1200","1151","1150","2066","1151-v2","Tr4"],[2,4,6,8,10,12,16,24],["Co","Khong"]],
                    Sort_item_old : [["Amd","Intel"],["I3","I5","I7","I9","R3","R5","R7","R9","Celeron","Athlon","Pentium","ThreadRipper"],["Am4","1200","1151","1150","2066","1151-v2","Tr4"],[2,4,6,8,10,12,16,24],["Co","Khong"]]
                })
                break
            case 'Gpu':
                this.setState({
                    fittername : ["TradeMark","Vram","Dong"],
                    Sort_item : [["Gigabyte","Msi","Asus","Nvidia","Galax","Colorful"],[2,3,4,6,8,11,5],["Rx","Rtx","Gtx","P","Gt"]],
                    Sort_item_old : [["Gigabyte","Msi","Asus","Nvidia","Galax","Colorful"],[2,3,4,6,8,11,5],["Rx","Rtx","Gtx","P","Gt"]]
                })
                break     
            case 'Ram':
                this.setState({
                    fittername : ["TradeMark","Bus","Dung luong"],
                    Sort_item : [["Adata","KingSton","KingMax","CorSair","G.Skill","Crucial","Geil"],[2400,2666,3000],[4,8,16]],
                    Sort_item_old : [["Adata","KingSton","KingMax","CorSair","G.Skill","Crucial","Geil"],[2400,2666,3000],[4,8,16]]
                })
                break
            case 'MainBoard':
                this.setState({
                    fittername : ["TradeMark","Socket","Chipset"],
                    Sort_item : [["Asus","Asrock","Msi","Gigabyte"],['1151','1200','Am4',"1150","Strx4"],["Z490","B450","B360","B365","H310","X570","Trx40","X470"]],
                    Sort_item_old : [["Asus","Asrock","Msi","Gigabyte"],['1151','1200','Am4',"1150","Strx4"],["Z490","B450","B360","B365","H310","X570","Trx40","X470"]]
                })
                break
            default:

        }
        
    }
    
    SetSortItem = (listItem,index) =>{
        var clone = []
        clone = this.state.Sort_item

        if(listItem.length === 0 )
        {
            clone[index] = this.state.Sort_item_old[index]
        }
        else
        {
            clone[index] = listItem
        }

        this.setState({
            Sort_item : clone
        })
    }

    kiemtra = (item)=>{      

        if(item.style !== this.props.style ) return false
        
        var listsort = this.state.Sort_item
        // console.log(item.id)
        
        // console.log(item.price)
        if(listsort.length > 0){
            switch (item.style){
                case 'Cpu' : 
                    // console.log(listsort[0].indexOf(item.trademark))
                    // console.log(listsort[1].indexOf(item.loai))
                    // console.log(listsort[2].indexOf(item.socket))
                    // console.log(listsort[3].indexOf(item.core))
                    // console.log(listsort[4].indexOf(item.threading))
                    // console.log("--------------")
                    if(listsort[0].indexOf(item.trademark) < 0 ) return false
                    if(listsort[1].indexOf(item.loai) < 0 ) return false
                    if(listsort[2].indexOf(item.socket) < 0 ) return false
                    if(listsort[3].indexOf(item.core) < 0 ) return false
                    if(listsort[4].indexOf(item.threading) < 0 ) return false
                    return true 
                case 'Gpu' :
                    // console.log(listsort[0].indexOf(item.trademark))
                    // console.log(listsort[1].indexOf(item.vram))
                    // console.log(listsort[2].indexOf(item.dong))
                    // console.log("--------------")
                    if(listsort[0].indexOf(item.trademark) < 0 ) return false
                    if(listsort[1].indexOf(item.vram) < 0 ) return false
                    if(listsort[2].indexOf(item.dong) < 0 ) return false
                    return true 
                case 'Ram' :
                    // console.log(listsort[0].indexOf(item.trademark))
                    // console.log(listsort[1].indexOf(item.bus))
                    // console.log(listsort[2].indexOf(item.size))
                    // console.log("--------------") 
                    if(listsort[0].indexOf(item.trademark) < 0 ) return false
                    if(listsort[1].indexOf(item.bus) < 0 ) return false
                    if(listsort[2].indexOf(item.size) < 0 ) return false   
                    return true 
                case 'MainBoard' :
                    if(listsort[0].indexOf(item.trademark) < 0 ) return false
                    if(listsort[1].indexOf(item.socketM) < 0 ) return false
                    if(listsort[2].indexOf(item.chipset) < 0 ) return false   
                    return true 
                default :
                    break
            }
        }

    }

    Quick_Sort = (arr) =>{
        for(var i = 0 ; i < arr.length - 1 ; i++ ){
            for(var j = i ; j < arr.length ; j++ ){
                if(arr[i].price > arr[j].price ){
                    var t = arr[i];
                    arr[i] = arr[j] ;
                    arr[j] = t;
                }
            }       
        }

        return arr
    }

    Sort = ()=>{
        var status = this.state.Sort_status
        
        var clone = [...this.props.Products]
        var clone2 = [...this.props.Products]
        var result = []
        result = this.Quick_Sort(clone)
    
        var result2 = clone2.sort((a,b) => (a.stt - b.stt))
        switch(status){
            case 'price1' :
                return result
            case 'price2' :
                return result.reverse()
            case 'item' :
                return result2.reverse()
            default :
                break
        }
    }


    RenderItem = () => {
        var Page = this.props.page
        if(this.props.Products.length !== 0)
        {
            var listproduct = []

            var productsbase = this.Sort()
            var Productclone = productsbase.filter(this.kiemtra)
            this.pagemax = Productclone.length
            for(var x = Page*8-8 ; (x < Page*8) && (x < Productclone.length) ; x++){

                listproduct.push(<ProductItem name = {Productclone[x].productname} id={Productclone[x].id} image = {Productclone[x].image} price = {Productclone[x].price} key = {x}/>)

            }

            return listproduct
        }
    } 

    RenderPageSwap = () => {
        var PageMax = (this.pagemax-1)/8 +1
        var LisPageSwap = []
        for(var i = 1 ; i<= PageMax ; i++)
        {   
            if(this.props.page === i.toString())
            {
                
                LisPageSwap.push(<NodepageSwapp classnode = {"page-item active"} ChangeProductPage = {(page)=>this.props.ChangeProductPage(page)} loai = {this.props.style} page = {i} key = {i}/>)
            }
            else
            {
                LisPageSwap.push(<NodepageSwapp classnode = {"page-item "} ChangeProductPage = {(page)=>this.props.ChangeProductPage(page)} loai = {this.props.style} page = {i} key = {i}/>)            }
        }
        return LisPageSwap
    }

    renderFitterBox =  () =>{
        var name = []
        name = this.state.fittername;

        var item = []
        item = this.state.Sort_item;

        var item_old = []
        item_old = this.state.Sort_item_old;

        var result = []
        for (var i = 0 ; i< name.length ; i++ ){
            result.push(<FitterBox 
                ChangeProductPage = {(page)=>this.props.ChangeProductPage(page)}
                fitteritem = {item_old[i]} 
                fittername = {name[i]} 
                key = {i} 
                id = {i}
                listcheck = {item[i]}
                SetSortItem = {(listItem,index) => this.SetSortItem(listItem,index)}/>)
        }

        return result;
    }
                    
    selectchange = (e) =>{
        var value = e.target.value
        this.setState({
            Sort_status : value
        })
    }

    render() {
        if(this.props.Products.length === 0)
        {
            return <PageLoad/>
        }
        else
        {
            return (
                <div>
                    <div className="mx-auto row mt-3">

                        <div className="custon-selectbox mx-auto col-4">
                            <div className="form-group">
                            <select onChange = {(e)=>this.selectchange(e)} className="form-control" id="select">
                                <option value="item" >Sản phẩm mới nhất</option> 
                                <option value="price1" >Giá tăng dần</option>
                                <option value="price2" >Giá giảm dần</option>
                            </select>
                            </div>
                        </div>
                    </div>
                    <section className="container-fluid row ">
                    <div className="row product col">

                    {this.RenderItem()} 

                        <nav style={{marginTop : '2%'}} aria-label="Page navigation" className="col-12">
    {/* disabled */}
                        <ul className="pagination justify-content-center">
                            <li className="page-item">
                                <div style = {{cursor : 'pointer'}} className="page-link" onClick = {()=>this.props.ChangeProductPage(1)} aria-label="Previous">
                                    <span aria-hidden="true">«</span>
                                    <span className="sr-only">Previous</span>
                                </div>
                            </li>

                            {this.RenderPageSwap()}

                            <li className="page-item">
                                <div style = {{cursor : 'pointer'}} className="page-link" onClick = {()=> this.props.ChangeProductPage(parseInt((this.pagemax-1)/8 +1))} aria-label="Next">
                                    <span aria-hidden="true">»</span>
                                    <span className="sr-only">Next</span>
                                </div>
                            </li>
                        </ul>

                        </nav>       
                    </div>
                        <div className="col-2 mt-3" style={{backgroundColor: 'rgba(167, 66, 66,.5)' , height : '80vh' , overflow: 'auto'}}>
                            <p className="text-center mt-3">Bộ lọc</p>
                            {this.renderFitterBox()}
                    </div>
                    </section>
                </div>
            )
        }
    }
}
