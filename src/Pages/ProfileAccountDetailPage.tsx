import React from 'react'
import Button from '../Components/Profile/Button.tsx'
import Input from '../Components/Profile/Input.tsx'
import ProfileAvatar from '../Components/Profile/ProfileAvatar.tsx'

const ProfileAccountDetailPage = () => {
    return (
        <section>
            <ProfileAvatar>AN</ProfileAvatar>
            <form>
                <Input classname="w-80" type="text" label="Full name" />
                <Input classname="w-80" type="email" label="Email" />
                <Button>
                    Save Changes
                </Button>
            </form>
        </section>
    )
}

export default ProfileAccountDetailPage