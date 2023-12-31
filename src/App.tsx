import {Divider} from '@dhis2-ui/divider'
import {colors} from '@dhis2/ui-constants'
import HeaderContainer from "./components/HeaderContainer";
import DashboardCard from "./components/DashboardCard";
import useDashboardFetch from "./hooks/useDashboardFetch.ts";

const containerStyles = {
    display: 'flex',
    flex: 1,
    minHeight: '100vh',
    alignItems: 'flex-start',
    justifyContent: 'center',
    background: colors.grey100,
}

function App() {

    const {dashboards, onChangeHandler, selectedItem} = useDashboardFetch();

    return (
        <div style={containerStyles}>
            <div style={{width: '40vw', textAlign: 'center'}}>
                <HeaderContainer onChangeHandler={onChangeHandler} selectedItem={selectedItem}/>
                <Divider dense/>
                {dashboards &&
                    dashboards.map((value, index) => {
                        return <DashboardCard key={index} initial={index === 0} dashboardItem={value}
                                              selectedItem={selectedItem}/>
                    })
                }
            </div>
        </div>
    )
}

export default App
