import React, {forwardRef, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deletePack, getPacks} from "../../../main/bll/pacsReducer";
import {AppStateType} from "../../../main/bll/store";
import {H3} from "../../../main/ui/commonStyle";
import MaterialTable from "material-table";
import IconButton from "@material-ui/core/IconButton";
import UpdateIcon from '@material-ui/icons/Update';
import DeleteIcon from '@material-ui/icons/Delete';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {PackType} from "../../../main/dll/cardsPacksApi";
import {useHistory} from "react-router-dom";
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import {Icons} from 'material-table';

const tableIcons: Icons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref}/>),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref}/>),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref}/>),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref}/>),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref}/>),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref}/>),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref}/>),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref}/>),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref}/>),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref}/>),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref}/>),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref}/>),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref}/>),
};

export const PacksTable = () => {

    const userId = useSelector<AppStateType, string>(state => state.auth.idUser);
    const dispatch = useDispatch()
    const {
        cardPacksTotalCount,
        cardPacks,
        pageSize
    } = useSelector((store: AppStateType) => store.packs)

    useEffect(() => {
        dispatch(getPacks({}));
    }, [dispatch])


    let pagesCount = Math.ceil(cardPacksTotalCount / pageSize)//data for paginator -
    return (
        <Container maxWidth="lg" style={{background: "white", height: "50vh"}}>
            <Grid container direction={"column"} justifyContent={"center"} alignItems="center" spacing={3}>
                {cardPacks!.length === 0 ? <H3>This user has no packs.</H3>
                    :
                    <TablePacks cardPacks={cardPacks}/>
                }
            </Grid>
        </Container>
    )}


export type TablePacksPropsType = {
    cardPacks: Array<PackType>
}

export const TablePacks: React.FC<TablePacksPropsType> = ({cardPacks}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const routeChange = (packId: string) => {
        let path = '/cards/' + packId
        history.push(path);

    }
    return (
        <div style={{maxWidth: '100%'}}>
            <MaterialTable
                icons={tableIcons}
                columns={[
                    {title: 'Name', field: 'name'},
                    {title: 'Cards count', field: 'cardsCount'},
                    {title: 'Updated', field: 'updated'},
                    {
                        title: "Cards",
                        field: "internal_action",
                        render: (rowData) =>
                            rowData && (
                                <IconButton
                                    color="primary"
                                    onClick={() => routeChange(rowData._id)}
                                >
                                    <LibraryBooksIcon/>
                                </IconButton>
                            )
                    },
                    {
                        title: "Delete pack",
                        field: "internal_action",
                        render: (rowData) =>
                            rowData && (
                                <IconButton
                                    color="secondary"
                                    onClick={
                                        () => {
                                            console.log(rowData._id)
                                            dispatch(deletePack(rowData._id, true))
                                        }
                                    }
                                >
                                    <DeleteIcon/>
                                </IconButton>
                            )
                    },
                    {
                        title: "Update pack",
                        field: "internal_action",
                        render: (rowData) =>
                            rowData && (
                                <IconButton
                                    color="secondary"
                                    // onClick={console.log("delete")}
                                >

                                    <UpdateIcon/>
                                </IconButton>
                            )
                    }
                ]}
                data={[...cardPacks]}
            />
        </div>
    )
}
