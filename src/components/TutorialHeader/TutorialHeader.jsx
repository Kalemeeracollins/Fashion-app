import React from 'react';
import {Header, HeaderContainer, HeaderName,HeaderNavigation,HeaderMenuButton,HeaderMenuItem,HeaderGlobalBar,HeaderGlobalAction,SkipToContent,SideNav,SideNavItems,HeaderSideNavItems,
} from 'carbon-components-react';
import {AppSwitcher20,Notification20,UserAvatar20,
} from '@carbon/icons-react';
import { Link } from 'react-router-dom';

const TutorialHeader = () => (
<HeaderContainer className="header-container"
     render={({isSideNavExpanded, onClickSideNavExpand}) =>(
         <Header arial-label="Carbon Tutorial">
             <SkipToContent/>

             <HeaderMenuButton
              aria-label="Open Menu"
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
              />

              <HeaderName element={Link} to="/" prefix="CK">
                <Link to="/" >Fashions </Link> 
              </HeaderName>
              <HeaderNavigation aria-label="Carbon Tutorial">
          <HeaderMenuItem ><Link to='/sign'>Sign up</Link></HeaderMenuItem>
        </HeaderNavigation>
        <HeaderNavigation aria-label="Carbon Tutorial">
          <HeaderMenuItem ><Link to='/repos'>Order</Link></HeaderMenuItem>
        </HeaderNavigation>
        <HeaderNavigation aria-label="Carbon Tutorial">
          <HeaderMenuItem ><Link to='/items'>Items</Link></HeaderMenuItem>
        </HeaderNavigation>
              <SideNav
               aria-label="Side navigation"
               expanded={isSideNavExpanded}
               isPersistent={false}>
                   <SideNavItems>
                       <HeaderSideNavItems>
                           <HeaderMenuItem ><Link to='/sign'>Sign up</Link></HeaderMenuItem>
                       </HeaderSideNavItems>
                       <HeaderSideNavItems>
                           <HeaderMenuItem ><Link to='/repos'>Order</Link></HeaderMenuItem>
                       </HeaderSideNavItems>
                       <HeaderSideNavItems>
                           <HeaderMenuItem ><Link to='/items'>Items</Link></HeaderMenuItem>
                       </HeaderSideNavItems>

                   </SideNavItems>
               </SideNav>
               <HeaderGlobalBar>
                   <HeaderGlobalAction aria-label="Notifications">
                       <Notification20 />
                   </HeaderGlobalAction>
                   <HeaderGlobalAction aria-label="User Avatar">
                       <UserAvatar20 />
                   </HeaderGlobalAction>
                   <HeaderGlobalAction aria-label="App Switcher">
                       <AppSwitcher20 />
                   </HeaderGlobalAction>
               </HeaderGlobalBar>
         </Header>
     )}
     />
);

export default TutorialHeader;